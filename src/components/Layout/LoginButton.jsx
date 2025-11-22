"use client";

import Link from "next/link";
import { AccountCircle } from "@mui/icons-material";

const LoginButton = ({ scrolled }) => {
  return (
    <Link href="/login" passHref>
      <AccountCircle
        fontSize="large"
        className={`
          ${scrolled ? " text-yellow-400  " : " text-gray-300 "}
        `}
      />
    </Link>
  );
};

export default LoginButton;
