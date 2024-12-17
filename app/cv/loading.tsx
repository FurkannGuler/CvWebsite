import React from 'react'
import { Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center px-[5%] py-[3%] mt-28">
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-center gap-x-[25%]">
          <SkeletonCircle size="20" />
          <SkeletonCircle size="20" />
          <SkeletonCircle size="20" />
        </div>
        <Stack className="mt-20  ">
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      </div>
    </div>
  );
}

export default Loading