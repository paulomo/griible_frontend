import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router"
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AuthRoutes } from "../../../route/RouteEnum";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type SignUpProps = {
  name: string,
  email: string,
  password: string
}

let schema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email().required("Email is a required field"),
  password: yup
    .string()
    .required()
    .min(8, "Password must be at least 8 characters"),
});

export const SignUp: React.FC = () => {
  const history =  useHistory();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<SignUpProps>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
  });

  const handleSignup = (data: any) => {
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <div className="h-screen">
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10">
            <div className="flex items-center justify-center xl:flex-row">
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up
                  </h3>
                  <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Name
                      </label>
                      <input
                        placeholder="John"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="name"
                        {...register("name")}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Email
                      </label>
                      <input
                        placeholder="john@gmail.com"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        {...register("email")}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        {...register("password")}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide 
                        text-white transition duration-200 rounded shadow-md bg-orangeCustom hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Sign Up
                      </button>
                    </div>
                    <Link
                      to={AuthRoutes.login}
                      className="text-xs text-gray-600 sm:text-sm"
                    >
                      Already have an account?{" "}
                      <span className="text-textSecondaryColor">Log In.</span>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    </motion.div>
  );
};
