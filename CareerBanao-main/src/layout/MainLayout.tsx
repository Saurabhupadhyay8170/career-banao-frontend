import Footer from "components/main-website/Footer"
import Header from "components/main-website/header"


const MainLayout = ({ children }: ChildrenType) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default MainLayout
