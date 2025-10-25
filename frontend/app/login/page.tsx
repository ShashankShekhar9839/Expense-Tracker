"use client";

import Link from "next/link";
import { Button, Input, Card } from "@/components";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <Card>
        <h1 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-6">
          Login
        </h1>
        <form className="space-y-5">
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter password" />
          <p className="text-center cursor-pointer">Forgot Password ? </p>
          <Button type="submit">Login</Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-[var(--color-primary)] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}
