import VideoRoom from "@/components/forTutRoom/VideoRoom";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: any;
}

const TutRoom = ({ params }: PageProps) => {
  const { id } = params;
  return (
    <main className=" min-h-screen bg-slate-900">
      {/* TutRoom with ID: {id} */}
      <VideoRoom />
    </main>
  );
};

export default TutRoom;
