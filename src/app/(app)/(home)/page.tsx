import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Home() {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({
    collection: 'users',
  })
  
  return (
    <div>
      {/* {categories.docs.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))} */}

      {JSON.stringify(data, null, 2)}
    </div>
  );
}
