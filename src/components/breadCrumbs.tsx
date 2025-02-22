// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Typography from "@mui/material/Typography";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import {usePathname} from "next/navigation";
// import Link from "next/link";

// const parsePath = (path: string): string[] => {
//   const cleaned = path.replace(/^\/+/, "");
//   const segments = cleaned.split("/");
//   return segments.map((segment) => segment.replace(/-/g, " "));
// };

// export default function Breadcrumb() {
//   const pathname = usePathname();
//   console.log({pathname, parsed: parsePath(pathname)});
//   const breadcrumbs = parsePath(pathname).map((segment, index) => (
//     <Link key={index} href={`/${pathname.slice(0, pathname.indexOf(segment))}`}>
//       <Typography color="text.primary">{segment}</Typography>
//     </Link>
//   ));
//   console.log({breadcrumbs});

//   // const breadcrumbs =

//   //   [
//   //   <Link key="1" color="inherit" href="/">
//   //     MUI
//   //   </Link>,
//   //   <Link
//   //     key="2"
//   //     color="inherit"
//   //     href="/material-ui/getting-started/installation/"
//   //   >
//   //     Core
//   //   </Link>,
//   //   <Typography key="3" sx={{color: "text.primary"}}>
//   //     Breadcrumb
//   //   </Typography>
//   // ];

//   return (
//     <Breadcrumbs
//       separator={<NavigateNextIcon fontSize="small" />}
//       aria-label="breadcrumb"
//     >
//       {breadcrumbs}
//     </Breadcrumbs>
//   );
// }
"use client";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {usePathname} from "next/navigation";

const parsePath = (path: string): string[] => {
  const cleaned = path.replace(/^\/+/, "");
  const segments = cleaned.split("/");
  return segments.map((segment) => segment.replace(/-/g, " "));
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = parsePath(pathname);

  // CASE 1: Only one segment => just text
  if (segments.length === 1) {
    return <p className="text-gray-800 capitalize">{segments[0]}</p>;
  }

  // CASE 2: Multiple segments => all segments except the last, joined as a single string but last segment is plain text
  const linkText = segments.slice(0, -1).join(" / ");
  const lastSegment = segments[segments.length - 1];

  const partialPath =
    "/" +
    segments
      .slice(0, -1)
      .map((s) => s.replace(/\s+/g, "-"))
      .join("/");

  return (
    <div className="flex gap-1 items-center">
      <Link href={partialPath}>
        <span className="capitalize text-gray-500">{linkText}</span>
      </Link>
      <NavigateNextIcon fontSize="small" sx={{color: "#D0D5DD"}} />
      <span className="font-medium text-gray-800 capitalize">
        {lastSegment}
      </span>
    </div>
  );
};

export default Breadcrumbs;
