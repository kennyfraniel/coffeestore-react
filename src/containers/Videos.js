import ItemListContainer from '../components/ItemListContainer'

const Videos = () => {
  return (
    <>
    <ItemListContainer
    thumbnails="https://http2.mlstatic.com/D_NQ_NP_605820-MLA49325631344_032022-O.webp"
    title='Cafiza'
    description='Artículo de limpieza para máquina de espresso. El Cafiza tiene una fórmula concentrada que elimina residuos en grupos, válvulas y líneas. Tanto la espuma como la solubilidad son balanceadas para una limpieza potente y un enjuague óptimo.'
  />
  <ItemListContainer
  thumbnails="https://www.newcocoffee.com/wp-content/uploads/2022/06/Rinza-782332_web.jpg"
  title="Rinza"
  description="Destruye la acumulación de minerales y calcio en las barras de vapor y las jarras de acero."
  />
  <ItemListContainer
  thumbnails="https://upload.wikimedia.org/wikipedia/commons/5/5d/Macchinetta.jpg"
  title="Cafetera Moka"
  description="La cafetera italiana o cafetera moka, también conocida popularmente como greca o macchinetta (en español «maquinita»), es una cafetera que, de manera similar a la cafetera expreso, elabora el café haciendo pasar agua hervida presurizada por vapor, a través de café molido."
  />
  <ItemListContainer
  thumbnails="https://m.media-amazon.com/images/I/41oKuR-A7zL.jpg"
  title="Portafiltro"
  description="Los portafiltros de café son las pequeñas cazuelitas o cazos donde se insertan los filtros donde depositamos el café. Aparte del hueco donde se coloca el filtro, también disponen de un mango que es el responsable de que llamemos a estas máquinas cafeteras de brazo."
  />
  </>
  )
}

export default Videos