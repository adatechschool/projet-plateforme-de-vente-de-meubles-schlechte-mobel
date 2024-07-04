// import { Card } from "flowbite-react";

// export function MyCard(props) {
//   const { category='', description='', image='' } = props;
//   return (
//     <Card
//       href="#"
//       className="max-w-sm bg-opacity-80 backdrop-blur-sm bg-white/30 bg-[#ffedd8] rounded-md"
//     >
//       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         {category}
//       </h5>
//       <p className="font-normal text-gray-700 dark:text-gray-400">
//         {description}
//       </p>
//       <img src={image} alt={category} />
//     </Card>
//   );
// }

import { Card } from "flowbite-react";

export function MyCard(props) {
  const { category = "", description = "", image = "" } = props;
  return (
    <Card
      href="#"
      className="bg-opacity-80 backdrop-blur-sm bg-white/30 bg-[#ffedd8] rounded-md flex flex-col justify-between w-full"
    >
      <div>
        <h5 className="w-80 h-54 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {category}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
      <img src={image} alt={category} className="object-cover h-40 w-full" />
    </Card>
  );
}
