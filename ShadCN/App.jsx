import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

/* ---------------- FEEDBACK FORM ---------------- */
function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = () => {
    setSubmitted(form);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Textarea
          placeholder="Feedback"
          value={form.feedback}
          onChange={(e) => setForm({ ...form, feedback: e.target.value })}
        />
        <Button onClick={handleSubmit}>Submit</Button>

        {submitted && (
          <div className="mt-3 text-sm">
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* ---------------- IMAGE SLIDESHOW ---------------- */
function ImageSlideshow() {
  const images = [
    "https://via.placeholder.com/300/111",
    "https://via.placeholder.com/300/333",
    "https://via.placeholder.com/300/555",
  ];
  const [index, setIndex] = useState(0);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-3">
        <img src={images[index]} className="mx-auto rounded" />

        <div className="flex justify-center gap-3">
          <Button
            onClick={() => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          >
            Previous
          </Button>
          <Button
            onClick={() => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------------- TODO APP ---------------- */
function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo) return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Input
            placeholder="Add todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <Checkbox
              checked={t.completed}
              onCheckedChange={() =>
                setTodos(
                  todos.map((item, idx) =>
                    idx === i ? { ...item, completed: !item.completed } : item
                  )
                )
              }
            />
            <span className={t.completed ? "line-through text-gray-500" : ""}>
              {t.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

/* ---------------- MAIN APP ---------------- */
export default function App() {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  );
}
