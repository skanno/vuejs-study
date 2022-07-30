export default {
  name: 'HelloJSX',
  data() {
    return {
      title: 'HelloWorld',
      message: 'This is sample messgage.'
    }
  },
  render(h) {
    return (
      <div class="alert alert-primary">
        <h2>{this.title}</h2>
        <p>{this.message}</p>
      </div>
    );
  }
}
