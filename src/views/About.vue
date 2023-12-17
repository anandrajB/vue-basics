<template>
  <h1>hey this is about</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, magni.
    Harum, voluptatum aut perspiciatis consectetur expedita maiores dicta modi
    nemo ipsum quasi, voluptate fugit quidem explicabo illum a ipsam
    repellendus.
  </p>

  <p id="demo">{{ greet }} {{ name }}</p>
  <div v-text="company" class="company"></div>
  <div :class="company">hey</div>
  <div v-html="base"></div>
  <div :id="headingID">new heading</div>
  <button :disabled="isDisabled">bind this</button>
  <h2 class="underline">underline text</h2>
  <!-- add extra name to class  -->
  <h1 class="underlined" :class="status">status</h1>
  <h2 :class="ispromoted && 'promoted'">promoted movie</h2>
  <!-- conditional style -->
  <h2 :class="issold ? 'soldout' : 'new'">movie data</h2>
  <!-- combined styles -->
  <h2 :class="['new', 'promoted']">newly promoted movie</h2>
  <!-- combined and conditional style -->
  <h2 :class="[ispromoted && 'promoted', issold ? 'soldout' : 'new']">
    array conditional movie
  </h2>
  <!-- dynamic class name -->
  <h1
    :class="{
      promoted: ispromoted,
      new: !issold,
      soldout: issold,
    }"
  >
    object movie
  </h1>
  <!-- inline style -->
  <h1 :style="{
    color : highlight,
    fontSize : headersize + 'px',
    padding : '20px'
  }" >inline style</h1>

  <!-- multiple inline styles -->
  <h1 :style="headerstyleobject">
    hey inline
  </h1>

  <!-- instead of v-bind , use : -->
  <!-- combined style -->
  <h1 :style="[base , base2]">combined</h1>

</template>

<script>
export default {
  name: "about",
  data() {
    return {
      greet: "hello",
      name: "username",
      company: "venzo",
      base: "<b> hey </b>",
      headingID: "myheading",
      isDisabled: false,
      status: "danger",
      ispromoted: true,
      issold: true,
      highlight : 'blue',
      headersize : 50,
      headerstyleobject : {
        color : 'orange',
        fontSize : '50px',
        padding : '20px'
      },
      base : {
        fontSize : '30px',
      },
      base2 : {
        color : 'red',
        padding : '20px'
      },
    };
  },
};
</script>


<style>
#demo {
  font-size: 32px;
}

.company {
  color: red;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: blue;
}

.soldout {
  color: red;
}
</style>