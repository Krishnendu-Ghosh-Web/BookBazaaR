import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle login
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Close modal on success (you can conditionally do this)
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
        <button
          type="button"
          onClick={() => document.getElementById("my_modal_3").close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg">Login</h3>

        {/* Main Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {/* Email input */}
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

          {/* Password input */}
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

          {/* Submit button */}
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800"
          >
            Login
          </button>
        </form>

        {/* Link to signup */}
        <p className="mt-4 text-sm">
          Not registered?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </dialog>
  );
}

export default Login;
