import React from 'react'

function App() {

  let intervalId;
  const holdDown = () => {
    intervalId = setInterval(function () {
      document.getElementById('camera').scrollTop += 50;
    }, 100)
  }
  const holdDownRelease = () => {
    clearInterval(intervalId)
  }

  return (
    <div>
      <div
        id='camera'
        style={{
          width: '300px',
          height: '300px',
          overflow: 'hidden'
          // overflow: 'scroll'
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ullam! Nobis animi id aspernatur. Molestias qui nulla eius nostrum iste illum magnam, ab delectus maxime a exercitationem, ducimus cumque cupiditate perspiciatis consectetur. Unde consequatur quam maxime nemo delectus porro deleniti temporibus. Eius architecto praesentium totam sunt quae, ea facilis laborum maiores obcaecati delectus? Error, corporis! Hic voluptatibus eveniet nam sequi ratione placeat blanditiis similique rerum ducimus reiciendis tenetur facilis tempora quos dicta totam, voluptates reprehenderit iste quas repudiandae! Nostrum nesciunt ut vitae tenetur voluptates, dolore ea quaerat modi, ad eaque voluptatibus officiis nulla. Quod nobis temporibus fugit reiciendis suscipit numquam nesciunt sequi saepe voluptate sunt. Harum exercitationem labore accusamus voluptates, perferendis numquam non delectus architecto veritatis autem sed nulla temporibus ex inventore iusto excepturi molestiae modi nisi voluptatibus? Neque ex ipsa, atque odio itaque quaerat, et tempore nobis consequatur vitae, quam laboriosam eum cum delectus? Vel voluptates asperiores tempora optio? Inventore est, quaerat a, reiciendis soluta molestiae veniam eos facilis ratione expedita omnis ipsa ex qui consequuntur cumque quasi officiis laboriosam, odit vel culpa. Fugiat eum similique consequuntur ab repellat. Consequatur quia iste voluptatem dolores eum, nulla quos et iusto nostrum eos! Id quibusdam in et eveniet totam tenetur? Magnam ex pariatur, natus laudantium illum tenetur sequi maiores distinctio in molestias nesciunt. Consequuntur, accusantium ullam illo nostrum qui impedit voluptatibus minus laudantium. Iure, optio officiis deleniti possimus itaque eius molestiae repellat esse totam minima quis fugiat aliquam, odit fugit voluptate consequuntur! Enim ipsa itaque, quae nostrum dolores expedita aspernatur odio sit quisquam hic, labore nesciunt reiciendis vitae molestiae minima fugiat quod laborum deleniti. Iusto animi ab dicta aperiam omnis libero? Ea hic corporis vitae rem fugiat officiis, natus voluptates? Id nam, eum dicta assumenda vitae modi expedita qui deleniti. Totam dolore eum consectetur facilis, ullam eveniet obcaecati, illo perferendis quas dolores unde? Saepe, ratione porro. Fugit minima beatae architecto eaque. Nesciunt corrupti molestiae, vitae ex animi eveniet facilis similique dignissimos, dolor accusamus in quam nisi commodi dicta ea nemo, voluptatem eum. Officiis qui quod eligendi necessitatibus quidem doloribus placeat eum accusantium rerum ex illum quo iste impedit aut officia sapiente explicabo soluta itaque voluptatibus excepturi consectetur, velit dolorem. Aut eligendi vel a atque optio ratione provident non quam facere, ad recusandae sint velit possimus error fugiat repudiandae vero asperiores hic excepturi exercitationem? Natus veritatis dolorum quibusdam repellendus maxime commodi corporis quisquam dolores, voluptate harum quia delectus amet ullam error, reiciendis quaerat quos nisi! Velit molestias ducimus eligendi repudiandae eaque natus quos aliquam voluptatum quae, a sit est esse dolorum eum minus error laboriosam eveniet tempora dolorem expedita sequi excepturi amet! In eum quis officia quasi consequuntur iure expedita, veniam sapiente. Earum quaerat nesciunt adipisci illum, quisquam incidunt aperiam cumque ut ratione nisi suscipit obcaecati natus, sapiente nemo minus animi. Quae molestias tenetur enim! At aliquam similique delectus doloribus enim molestiae eius nihil nesciunt explicabo repellat, ea illo sed autem rerum nisi perspiciatis aut libero aperiam quod iste asperiores magnam. Pariatur, fuga voluptatum repudiandae velit atque maiores perferendis nemo possimus sequi?
        </p>
      </div>

      <button
        onMouseDown={holdDown}
        onMouseUp={holdDownRelease}
      >down</button>
    </div>
  )
}

export default App