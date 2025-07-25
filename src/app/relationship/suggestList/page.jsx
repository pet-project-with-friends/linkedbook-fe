import CardProfile from "@/src/views/pages/relationship/cards/CardProfile";
import { Pagination } from "@mui/material";

export default function page() {
  let typeButton = "suggess";

  return (
    <div className="w-full min-h-90 h-auto bg-boxColor rounded-xl p-[20px] flex flex-col gap-5 border_element">
      <h1 className="text-base font-bold text-title h-max">
        Someone want to be your friend
      </h1>
      <div className="flex flex-col w-full h-auto gap-3">
        <div className="grid grid-cols-4 auto-rows-fr gap-5 w-full min-h-[30rem] h-auto">
          {Array.from(new Array(8)).map((_, idx) => (
            <CardProfile key={idx} buttonType={typeButton} />
          ))}
        </div>
        <Pagination
          count={10}
          color="primary"
          className="flex justify-center"
        />
      </div>
    </div>
  );
}
