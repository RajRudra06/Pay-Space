import { type JSX } from "react";
import "tailwind-config/globals.css";

export function Card():JSX.Element {
  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
      <h1 className="text-2xl font-bold text-green-600">Hello Tailwind! UI Card</h1>
    </div>
    );
}
