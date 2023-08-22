// "use client";
// import { FormLabel, Input, Checkbox } from "@mui/joy";
// import Button from "@mui/material/Button";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import bgImage from "@/public/machoo_logo.png";
// import { useState } from "react";
// import { useFormik } from "formik";
// import { responseChecker } from "@/app/helper/toast";
// import axios from "axios";
// import { loginSchema } from "@/app/helper/UserValidation";
// import jwt from "jsonwebtoken";
// import cookie from "cookie";
// import Cookies from "js-cookie";

// const LoginPage = () => {
//   // const savedUserName = localStorage?.getItem("savedUserName");
//   // const [isChecked, setIsChecked] = useState<boolean>(savedUserName !== null && savedUserName !== "" ? true : false);
//   const router = useRouter();

//   const onSubmit = async (values: any) => {
//     try {
//       const response = await axios({
//         url: `/api/${slug}`,
//         data: JSON.stringify(values),
//         headers: { "content-type": "application/json" },
//         method: "POST",
//       })
//         .then((response: any) => {
//           console.log(response);
//         })
//         .catch((error) => {
//           responseChecker(error.response);
//         });
//     } catch (error) {
//       console.error("Error:", error);
//     }

//     // try {
//     //   axios({
//     //     url: "/api/v1/auth",
//     //     headers: { "Content-Type": "application/json" },
//     //     method: "POST",
//     //     data: values,
//     //   })
//     //     .then((response: any) => {
//     //       if (response.status === 200) {
//     //         console.log("data", response);
//     //       }

//     //       responseChecker(response);

//     //       // if (isChecked) localStorage.setItem("savedUserName", values.userId);
//     //       // else localStorage.setItem("savedUserName", "");

//     //       router.push("./home");
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //       responseChecker(error.response);
//     //     });

//     //   // const token = response.data.token;

//     //   // console.log(token);

//     //   // Store token in state, context, or localStorage
//     //   // Redirect user to a protected route
//     // } catch (error) {
//     //   console.error("Login failed:", error);
//     // }

//     // axios({
//     //   url: process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/auth/login",
//     //   headers: { "Content-Type": "application/json" },
//     //   method: "POST",
//     //   data: values,
//     // })
//     //   .then((response: any) => {
//     //     if (response.status === 200) {
//     //       console.log(response.data.token);
//     //     }

//     //     responseChecker(response);

//     //     // if (isChecked) localStorage.setItem("savedUserName", values.userId);
//     //     // else localStorage.setItem("savedUserName", "");

//     //     router.push("./home");
//     //   })
//     //   .catch((error) => {
//     //     responseChecker(error.response);
//     //   });
//   };

//   const { values, handleBlur, handleChange, handleSubmit, touched, errors } = useFormik({
//     initialValues: {
//       userId: "",
//       password: "",
//     },
//     onSubmit,
//     validationSchema: loginSchema,
//   });

//   const saveUsername = (event: any) => {
//     // setIsChecked(event.target.checked);
//     // localStorage.setItem("", "");
//   };

//   return (
//     <div className="flex w-screen h-screen bg-[#e3e3e3]">
//       <div className="w-screen h-screen sm:w-3/5 min-w-[30px]">
//         <div className="flex flex-col items-center justify-center h-screen">
//           <h2 className="block font-bold text-2xl">
//             마추 잉글리시에 오신것을
//             <span className="block text-center">환영합니다!</span>
//           </h2>
//           <p className="my-5">
//             회원가입 후, <span className="font-bold text-md">승인</span> 되면 로그인 하실 수 있습니다.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <div className="w-80">
//               <div className="my-5">
//                 <FormLabel>아이디</FormLabel>
//                 <Input placeholder="Login Id" name="userId" value={values.userId} onChange={handleChange} />
//                 {errors.userId && touched.userId && <p className="text-[9px] text-red-500">{errors.userId}</p>}
//               </div>
//               <div className="my-5">
//                 <FormLabel>비밀번호</FormLabel>
//                 <Input
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   value={values.password}
//                   onChange={handleChange}
//                 />
//                 {errors.password && touched.password && <p className="text-[9px] text-red-500">{errors.password}</p>}
//               </div>
//               <div className="flex justify-between my-5">
//                 <Checkbox label="아이디 저장" className="text-sm" />
//                 <Link href="./findaccount" className="text-sm underline">
//                   아이디·비밀번호찾기
//                 </Link>
//               </div>
//               <Button variant="contained" type="submit" className="w-full hover:bg-green-500 bg-gray-300">
//                 로그인
//               </Button>
//               <div className="flex justify-evenly my-5">
//                 <p className="text-sm">아직 계정이 없으신가요?</p>
//                 <Link href="./register" className="text-sm underline">
//                   회원가입
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="w-2/5 h-screen hidden sm:block">
//         <Image
//           src={bgImage}
//           alt="Background image"
//           className="w-screen h-screen rounded-l-xl rounded-bl-xl object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
