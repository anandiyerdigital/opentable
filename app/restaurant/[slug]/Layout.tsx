import Header from "@/app/components/Header"

export default function RestaurantLayout({
    children,
}: {
    children: React.ReactNode

}) {
    return (
        <main>
      
  <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
    </div>

        </main>
    )

}