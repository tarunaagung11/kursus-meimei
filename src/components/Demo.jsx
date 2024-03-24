import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
<section className="section">
  <div className="div1">
    <div className="div2">
      <h2 className="div3">
        Alamat kami
      </h2>
    </div>
    <div className="div5">
      <div className="div6">
        <div className="div7">
          <iframe
            title="map"
            src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=kursus meimei&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height={480}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
/>
        </div>
        <div>
          <div className="div8">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-white">Alamat</h3>
              <p className="mt-1 text-white">
                Jl. MT. Haryono No. 105
              </p>
            </div>
            <div className="div9">
              <h3 className="div10">Jam Oprasional</h3>
              <p className="div11">Setiap Hari: 9am - 9pm</p>
            </div>
            <div className="div9">
              <h3 className="div10">Kontak</h3>
              <p className="div11">Email: meimeijiaoyu@gmail.com</p>
              <p className="div11">Phone: 0852-2229-7913</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Demo
