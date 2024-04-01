import React from "react";

interface Voucher {
  voucherId: string;
  name: string;
  category: string;
  discount: number;
  description: string;
  aboutCompany: string;
  backgroundImg: string;
  howToRedeem: string[];
}

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher }) => {
  return (
    <div className="">
      <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">{voucher.name}</div>
        <div className="card-body text-primary">
          <h5 className="card-title">Discount: {voucher.discount}%</h5>
          <p className="card-text">{voucher.description}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>

      {/* <h2>{voucher.name}</h2>
      <p>Discount: {voucher.discount}%</p>
      <button>Buy Now</button> */}
    </div>
  );
};

export default VoucherCard;
