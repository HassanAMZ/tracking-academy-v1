import React from "react";
import { SingleCourseCardProps } from "@/types/index";

const SingleCourseCard: React.FC<SingleCourseCardProps> = ({
 course,
 type,
 isMain = false,
 className = "",
}) => {
 return <React.Fragment>{course.title}</React.Fragment>;
};

export default SingleCourseCard;
