"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

export function DrinkCan() {
  return (
    <div className="w-full h-screen absolute top-0 right-0 z-0">
      {/* এটি একটি পাবলিক স্যাম্পল সিন যা দেখতে মডার্ন ক্যানের মতো */}
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      
      {/* লোডিং এর সময় ব্ল্যাক ওভারলে */}
      <div className="absolute inset-0 bg-transparent pointer-events-none" />
    </div>
  );
}