import { Route, Routes } from 'react-router-dom';
import '../src/styles/global.css';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="project/:id" element={<Project />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
