import * as yup from 'yup'

export const emailSchema = yup
  .string()
  .required('ایمیل الزامی است')
  .email('ایمیل وارد شده معتبر نیست')

export const verificationCodeSchema = yup
  .string()
  .required('کد تأیید الزامی است')
  .matches(/^\d{6}$/, 'کد تأیید باید شامل ۶ رقم باشد')

export const phoneNumberSchema = yup
  .string()
  .required('شماره موبایل الزامی است')
  .matches(/^09\d{9}$/, 'شماره موبایل معتبر نیست')

export const passwordSchema = yup
  .string()
  .required('رمز عبور الزامی است')
  .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')

export const emailStepSchema = yup.object({
  email: emailSchema,
})

export const verifyStepSchema = yup.object({
  verificationCode: verificationCodeSchema,
})

export const profileStepSchema = yup.object({
  phoneNumber: phoneNumberSchema,
  password: passwordSchema,
})

