import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import * as yup from "yup";
import BusinessWoman from "../../../../common/images/woman-smartphone-computer.png";

let schema = yup.object().shape({
  companyName: yup.string().required("Company name is a required field"),
  country: yup.string().required("Country is a required field"),
  email: yup.string().email().required("Email is a required field"),
  type: yup.string().required("Company Type is a required field"),
  password: yup
    .string()
    .required()
    .min(8, "Password must be at least 8 characters"),
});

const accountType = ["individual", "company"];

export interface SignUpProps {
  companyName: string;
  type: string;
  country: string;
  email: string;
  password: string;
}

export const Top: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<SignUpProps>({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    reset();
    const dataToUpload: any = {
      tenantName: data.companyName,
      country: data.country,
      email: data.email,
      password: data.password,
      accountType: data.type,
    };
  };

  return (
    <React.Fragment>
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://kitwind.io/assets/kometa/laptop.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block py-3 mb-3 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Increase Your Productivity
                </p>
              </div>
              <h2 className="max-w-lg mb-3 font-sans text- font-bold tracking-tight text-textSecondaryColor sm:text-4xl sm:leading-none">
                Use Your Gmail Account
              </h2>
              <h2 className="max-w-lg font-sans text-6xl font-bold tracking-tight text-textSecondaryColor sm:text-4xl sm:leading-none">
                Like how You WhatsApp
              </h2>
              <p className="text-base pt-3 text-textSecondaryColor md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
