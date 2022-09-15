import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Button from "@suid/material/Button";

function App() {
    const [greetMsg, setGreetMsg] = createSignal("");
    const [name, setName] = createSignal("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name: name() }));
    }

    return (
        <div class="container">
            <h1>商品コード登録依頼</h1>

            <div class="row">
                <div>
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="商品名"
                    />
                </div>
            </div>
            <div>
                <p></p>
            </div>

            <div class="row">
                <div>
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="規格名"
                    />
                </div>
            </div>
            <div>
                <p></p>
            </div>

            <div class="row">
                <div>
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="分類名"
                    />
                </div>
            </div>
            <div>
                <p></p>
            </div>

            <div class="row">
                <div>
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="単位"
                    />
                </div>
            </div>
            <div>
                <p></p>
            </div>

            <div class="row">
                <div>
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="仕入先"
                    />
                </div>
            </div>
            <div>
                <p></p>
            </div>
            <Button variant="contained" onClick={() => greet()}>
                登録申請
            </Button>
            <p>{greetMsg}</p>
        </div>
    );
}

export default App;
