import DetailGallery from './components/DetailGallery'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Layout>
        <DetailGallery />
        {/* 메인 화면에 집어넣을 컴포넌트 작성. ex) <DetailGallery /> */}
      </Layout>
    </>
  )
}

export default App
