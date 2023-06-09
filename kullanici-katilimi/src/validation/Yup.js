import * as Yup from 'yup'

   export const formSc = Yup.object().shape({
    name: Yup
            .string()
            .trim()
            .required("Lütfen isminizi giriniz!")
            .min(3,"İsminizi tam giriniz"),
    lastname: Yup
            .string()
            .trim()
            .required("Lütfen soyadınızı giriniz!")
            .min(3,"Soyadınızı tam giriniz"),
    email: Yup
            .string()
            .email("Lütfen geçerli bir email adresi giriniz")
            .required("Lütfen bir email adresi giriniz"),
    password: Yup
            .string()
            .min(8, "En az 8 karakter olmalı")
            .required("Lütfen password oluşturunuz"),
    terms: Yup
            .boolean()
            .oneOf([true], "Kayıt için onaylamanız gerekli")                 
})
