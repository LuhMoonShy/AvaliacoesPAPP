import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { View, Text, SafeAreaView, Switch} from 'react-native'

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(0)
  const [produtos, setProdutos] = useState([
    { key: 1, nome: 'Laptop', preco: 4000 },
    { key: 2, nome: 'Monitor', preco: 1600 },
    { key: 3, nome: 'VisionPro', preco: 25000 },
  ])

  const [value, setValue] = useState(50)
  const [isOn, setIsOn] = useState(false)

  let produtosItem = produtos.map((value, key) => {
    return (
      <Picker.Item
        key={key}
        value={key}
        label={value.nome}
      />
    )
  })

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24 }}>Picker</Text>
      <Picker
      selectedValue={produtoSelecionado}
      onValueChange={(Item) => setProdutoSelecionado(Item)}
      >
      {produtosItem}
      </Picker>
      <Text style={{ fontSize: 24 }}>{'Produto: ' + produtos[produtoSelecionado].nome}</Text>
      <Text style={{ fontSize: 24 }}>{'Produto: ' + produtos[produtoSelecionado].preco}</Text>
      <Text style={{ fontSize: 24, marginTop: 20 }}>Slider</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={(value) => setValue(value)}
        step={10}
      />
      <Text style={{ fontSize: 24 }}>{value.toFixed()}</Text>
      <Text style={{ fontSize: 24 }}>Switch</Text>
      <Switch
        value={isOn}
        onValueChange={(value) => setIsOn(value)}
      />
      <Text style={{fontSize: 24}}>{isOn ? 'Ligado' : 'Desligado'}</Text>
    </SafeAreaView>
  )
}

export default App