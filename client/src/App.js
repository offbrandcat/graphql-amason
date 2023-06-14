import { Container } from 'react-bootstrap';
import Header from './componets/header';
import Footer from './componets/footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to AMASON</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;