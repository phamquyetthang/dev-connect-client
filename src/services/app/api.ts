import { putService } from "src/lib/helpers/connectApi"

export const changeThemeApi =(userId: string, theme: string)=>{
  return  putService('/user/theme',{userId, theme})
}