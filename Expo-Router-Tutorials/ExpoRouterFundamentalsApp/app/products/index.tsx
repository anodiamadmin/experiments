import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Products() {
  const products = [1, 2, 3];
  return (
    <View style={styles.container}>

        <Text style={{fontWeight: 'bold', color: 'grey', textDecorationLine: 'underline'}}>Product List Links</Text>
        {products.map((id) => (
          <Link key={id} href={`/products/${id}`}>
            <Text style={{ color: 'blue' }}>Product {id}</Text>
          </Link>
        ))}

        <Text style={{fontWeight: 'bold', color: 'grey', textDecorationLine: 'underline'}}>Relative Navigation</Text>
        <Link href={"./1"} relativeToDirectory>
          <Text style={{ color: 'green' }}>Route to '/products/1' via './1'</Text>
        </Link>

        <Text style={{fontWeight: 'bold', color: 'grey', textDecorationLine: 'underline'}}>[...catchAllRoutes]</Text>
        <Link href="/products/best-sellers/playstation-5">
          PlayStation 5 (Best Sellers)
        </Link>
        <Link href="/products/details/black-friday/playstation-5">
          PlayStation 5 (Deals)
        </Link>
        <Link href="/products/search/playstation-5">
          PlayStation 5 (Search)
        </Link>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
})