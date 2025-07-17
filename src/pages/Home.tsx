import { CodeBlock } from "../components/CodeBlock";

const pythonCode =
`# Hello world in Python 2
print "Hello World"
# Hello world in Python 3 (aka Python 3000)
print("Hello World")`;

const csharpCode =
`class HelloWorld {
 static void Main() {
  System.Console.WriteLine("Hello, World!");
 }
}`

const cppCode =
`#include <iostream.h>
main() {
  cout << "Hello World!" << endl;
  return 0;
}`

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-2xl">
      Home
    </div>
  );
}

export default Home;
