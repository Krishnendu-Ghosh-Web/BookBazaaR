import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    document.getElementById("my_modal_3").close();
  };

  useEffect(() => {
    const modal = document.getElementById("my_modal_3");
    if (modal?.showModal) {
      modal.showModal();
    }
  }, []);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-white text-black dark:bg-gray-800 dark:text-white">
        {/* Close Button */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-lg">Signup</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {/* Name */}
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">Name is required*</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">Email is required*</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">Password is required*</p>
            )}
          </div>

          {/* Submit + Login link */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700"
          >
            Signup
          </button>

          <p className="text-sm mt-2 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </dialog>
  );
}

export default Signup;
