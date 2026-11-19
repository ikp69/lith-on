import type { ProductDetail } from "@/data/products";

interface Props {
  product: ProductDetail;
}

export function ProductJsonLd({ product }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.overview,
    sku: product.modelCode,
    brand: {
      "@type": "Brand",
      name: "Lith-On Bharat Energy",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Lith-On Bharat Energy Private Limited",
      url: "https://www.lith-on.com",
    },
    category: "Battery Energy Storage System",
    model: product.modelCode,
    image: `https://www.lith-on.com${product.image}`,
    url: `https://www.lith-on.com/products/${product.slug}`,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Storage Capacity",
        value: product.capacity,
      },
      {
        "@type": "PropertyValue",
        name: "Rated Power",
        value: product.powerRating,
      },
      {
        "@type": "PropertyValue",
        name: "Chemistry",
        value: product.chemistry,
      },
      {
        "@type": "PropertyValue",
        name: "Cycle Life",
        value: product.cycleLife,
      },
      {
        "@type": "PropertyValue",
        name: "Enclosure Rating",
        value: product.enclosureRating,
      },
      {
        "@type": "PropertyValue",
        name: "Operating Temperature",
        value: product.operatingTemp,
      },
      {
        "@type": "PropertyValue",
        name: "Round-Trip Efficiency",
        value: product.efficiency,
      },
      {
        "@type": "PropertyValue",
        name: "Switchover Time",
        value: product.switchoverTime,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
