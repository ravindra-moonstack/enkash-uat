import { NextResponse } from 'next/server';
import sequelize from '@/src/lib/dbConnect';
import { QueryTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface AdminMember {
  id: number;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json(); 
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const rows = await sequelize.query<AdminMember>(
      'SELECT id, email, password FROM admins WHERE email = ? LIMIT 1',
      { 
        replacements: [email], 
        type: QueryTypes.SELECT,
        plain: true 
      }
    );

    if (!rows) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }
   
    const admin = rows;


    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        role: 'admin',
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '1d' }
    );

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      admin: {
        id: admin.id,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false,
         message: 'Internal server error' + `${process.env.DB_HOST} ` + `${process.env.DB_USER} ` + `${process.env.DB_NAME} ` + `${process.env.DB_PASSWORD} ` + error },
      { status: 500 }
    );
  }
}
