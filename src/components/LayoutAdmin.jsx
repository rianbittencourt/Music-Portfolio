

export function LayoutAdmin({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-[95rem] lg:px-8 ">
          <div className="w-full  bg-gray-900  " />
        </div>
      </div>
      <div className="relative flex w-full flex-col ">
       
        <main className="flex-auto">{children}</main>
       
      </div>
    </>
  )
}