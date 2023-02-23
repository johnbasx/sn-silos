import { nanoid } from "nanoid";

export const tabItems = [
  { id: nanoid(), name: "Photos" },
  { id: nanoid(), name: "Videos" },
];

export const photoTabs = [
  { name: "All", href: "#!" },
  { name: "Soil Sense", href: "#!" },
  { name: "SN Silos", href: "#!" },
  { name: "Organic Chef", href: "#!" },
  { name: "Tech Land", href: "#!" },
  { name: "Achievments", href: "#!" },
];

// 🍏

export const videoTabs = [
  { name: "All", href: "#!", current: true },
  { name: "Soil Sense", href: "#!", current: false },
  { name: "SN Silos", href: "#!", current: false },
  { name: "Organic Chef", href: "#!", current: false },
];

const imageAspectArray = [
  "video",
  "square",
  "auto",
  // "[3/4]",
  // "[4/5]",
  // "[2/3]",
  // "[1/2]",
  // "[9/16]",
  // "[4/6]",
  // "[5/7]",
];

export function suffleArray() {
  let randomIndex = Math.floor(Math.random() * imageAspectArray.length);
  return imageAspectArray[randomIndex];
}

export const images = [
  {
    id: nanoid(),
    category: "Soil Sense",
    src: "https://images.unsplash.com/photo-1662217321532-6e6b70677779?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvcmslMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "SN Silos",
    src: "https://images.unsplash.com/photo-1597744733748-9804ab9d0470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHdvcmslMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "Organic Chef",
    src: "https://images.unsplash.com/photo-1548057407-b022b3f5b6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHdvcmslMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "Tech Land",
    src: "https://images.unsplash.com/photo-1532033375034-a29004ea9769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGF5bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "Organic Chef",
    src: "https://images.unsplash.com/photo-1673778797664-e0d41a3d974a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHdvcmslMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "Soil Sense",
    src: "https://images.unsplash.com/photo-1594925397434-b70dbf330ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHdvcmslMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
];

export const videos = [
  {
    id: nanoid(),
    category: "Soil Sense",
    src: "https://images.unsplash.com/photo-1594233666755-d1cb282abd25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHdvcmslMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "SN Silos",
    src: "https://images.unsplash.com/photo-1594233666755-d1cb282abd25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHdvcmslMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "Organic Chef",
    src: "https://images.unsplash.com/photo-1641194298727-fa6e5401bf1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHx3b3JrJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "Tech Land",
    src: "https://images.unsplash.com/photo-1615873627562-3143ce826ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHx3b3JrJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "Achievments",
    src: "https://images.unsplash.com/photo-1618979306737-081b98715fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHx3b3JrJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
  {
    id: nanoid(),
    category: "Soil Sense",
    src: "https://images.unsplash.com/photo-1615873627859-ddc921550353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHx3b3JrJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    aspectRatio: suffleArray(),
  },
];
