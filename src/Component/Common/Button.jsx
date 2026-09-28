export default function Button({ title, onClick }) {
  return (
    <button onClick={onClick} className="group">
      <div className="group-hover:text-white relative flex items-center gap-2 cursor-pointer">
        <span
          className=" relative
                z-10
                text-xl
                sm:text-2xl
                font-medium
                text-black
                transition-colors
                duration-500
                group-hover:text-white ps-3"
        >
          {title}
        </span>
        <div className="bg-red-500  h-11 flex items-center justify-center aspect-square rounded-full shrink-0 ">
          <div
            className="absolute bg-green-500 right-0 top-0 bottom-0 w-0 min-w-10 left-auto group-hover:w-full rounded-full  bg-gradient-to-br
                from-red-500
                via-pink-500
                to-purple-500
                 transform transition-all duration-300 "
          ></div>
          <i className="fa-solid fa-arrow-right group-hover:text-white relative z-10 transform transition-all duration-300"></i>
        </div>
      </div>
    </button>
  );
}
//  <button
//       onClick={onClick}
//       className="relative inline-flex items-center group cursor-pointer h-14 px-4 overflow-hidden rounded-full"
//     >
//       <div
//         className="
//                 absolute
//                 inset-y-0
//                 right-0
//                 w-14
// bg-gradient-to-r
// from-red-500
// via-pink-500
// to-purple-500
// rounded-full
//                 transition-[width]
//                 duration-700
//                 ease-in-out
//                 group-hover:w-full
//               "
//       />

//       <span
//         className="
// relative
// z-10
// text-xl
// sm:text-2xl
// font-medium
// pr-12
// text-black
// transition-colors
// duration-500
// group-hover:text-white
//               "
//       >
//         {title}
//       </span>

//       <div
//         className="
//                 absolute
//                 right-0
//                 top-0
//                 bottom-0
//                 w-14
//                 z-10
//                 flex
//                 items-center
//                 justify-center
//                 text-xl
//                 text-black
//                 transition-colors
//                 duration-500
//                 group-hover:text-white
//               "
//       >
//         <i className="fa-solid fa-arrow-right"></i>
//       </div>
//     </button>
