"use client";
import * as React from "react";

import CourseDetailsPage from "@/components/Course/CourseDetailsPage";

const Page = ({ params }) => {
  // asynchronous access of `params.id`.
  const { id } = React.use(params);
  return <CourseDetailsPage courseId={id} />;
};

export default Page;
