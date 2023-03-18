import AppBar from "./components/AppBar"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AppBar />

      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/43315398&color=ff5500"></iframe>
      <div style={{
        fontSize: '10px',
        color: '#cccccc',
        lineBreak: 'anywhere',
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
        fontWeight: 100,
      }}>
        <a href="https://soundcloud.com/forss" title="Forss" target="_blank" style={{
          color: '#cccccc',
          textDecoration: 'none',
        }}>
          Forss
        </a> · <a href="https://soundcloud.com/forss/in-paradisum" title="In Paradisum" target="_blank" style={{
          color: '#cccccc',
          textDecoration: 'none'
        }}>
          In Paradisum
        </a>
      </div>

      <Footer />
    </>
  );
}

export default App;
