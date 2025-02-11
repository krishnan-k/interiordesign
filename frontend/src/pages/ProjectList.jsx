import React from "react";
import l1 from "../assets/l1.png";
const ProjectList = () => {
  return (
    <div className="max-w-[1600px] m-auto font-script pt-6 pb-6">
      <div className="project_list_section">
        <div class="flex border-gray-300 border-[1px] hover:bg-gray-100 bg-[#F5F5F5]">
          <img src={l1} alt="list-image" />
          <div class="p-4 leading-normal">
            <h5 className="font-bold text-left pb-1 text-2xl text-black">
              Kitchen Worktop
            </h5>

            <div className="inner_content text-left">
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Bristol - England
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Slab - Marble
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Duration : Completed
              </p>
            </div>
            <div className="Description">
              <h5 className="font-bold text-left pb-1 text-xl text-black">
                Description
              </h5>
              <p className="text-left font-base">
                Project initiation - The beginning of the project that includes
                the hiring of construction <br></br> and design teams, defining
                the scope of the work, creating a budget.....
              </p>
            </div>

            <div className="desc_btn">
              <div className="budget_btn flex gap-5 mt-1">
                <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                  View
                </button>
                <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                  Send a Proposal
                </button>
                <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                  Apply Internship
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
