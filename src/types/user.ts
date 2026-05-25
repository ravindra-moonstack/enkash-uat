export interface User {
  ID: number
  user_login: string
  user_pass?: string
  user_email: string
  first_name?: string
  last_name?: string
  nickname?: string
  description?: string
  profile_image_url?: string
  created_at: string
  updated_at: string
}
