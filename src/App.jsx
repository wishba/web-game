import React from 'react'

function App() {
  return (
    <div>
      <div
        id='camera'
        style={{
          width: '300px',
          height: '300px',
          overflow: 'scroll'
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nobis. Quis recusandae ipsam asperiores? Exercitationem, laboriosam ipsam illum ipsa, facere nisi nam ullam ea esse maiores impedit aspernatur! Libero iusto voluptate quidem placeat sunt maiores magni sequi vel omnis tempora tempore, magnam illum pariatur explicabo architecto quod natus laboriosam fugiat. Excepturi saepe qui exercitationem quaerat mollitia cupiditate laudantium ipsum veritatis aspernatur inventore a sed, officiis voluptate accusantium doloremque beatae quibusdam rem. Ex modi quod, iste corporis culpa accusamus! Doloremque similique amet beatae dolor libero assumenda unde, ipsa fugiat quisquam aliquid neque, corporis porro praesentium. Ipsa eum ipsam pariatur temporibus fuga.
        </p>
      </div>

      <button
        onClick={() => {
          document.getElementById('camera').scrollTop += 50
        }}
      >down</button>
    </div>
  )
}

export default App