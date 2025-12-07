import Banner from "../../components/Home/Banner"
import FAQ from "../../components/Home/FAQ"
import TopScholarships from "../../components/Home/TopScholarships"
import Container from "../../components/Shared/Container"

const Home = () => {
  return (
    <div>
      <Container >
        <Banner />
        <TopScholarships />
        <FAQ />
      </Container>
    </div>
  )
}

export default Home
