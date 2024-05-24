import Layout from './components/Layout'
import ReservationComponent from './components/ReservationComponent'
import Grid from './components/slider/Grid'
import DetailLayout from './components/DetailLayout'

const ListPage = () => {
  return (
    <>
      <Layout padding={'main-padding-list'}>
        <Grid />
      </Layout>
    </>
  )
}
function App() {
  return (
    <>
      {/* <ListPage /> */}
      <DetailLayout />
    </>
  )
}

export default App
