import Sidebar from '@/components/sidebar'
import Header from '@/components/header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="w-[300px] hidden z-20 md:block" />
        <main className="flex-1 pt-16 overflow-x-hidden overflow-y-auto ">
          {children}
        </main>
      </div>
    </>
  )
}
