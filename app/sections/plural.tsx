import {useIcons} from "@/app/store/main";
import {useRef, useState} from "react";
import {motion} from "framer-motion";
import {download} from "@/app/utils";
import Icon from "@/app/components/icon";

const tabs = ["Light", "Dark"];

export default function Plural() {
    const {plural} = useIcons();
    const modal = useRef<HTMLDialogElement>(null);
    const [data, setData] = useState<string>("");
    const [tab, setTab] = useState<string>("Light");

    const openModal = (value: string) => {
        setData(value);
        modal.current?.showModal();
    }

    const handleDownload = () => {
        download(data);
        modal.current?.close();
    }

    return (
        <>
            <div role="tablist" className="tabs tabs-boxed my-5 mx-auto w-3/5 tabs-lg">
                {tabs.map((item) => <a role="tab" className={`tab text-xl font-bold ${item == tab ? "tab-active" : ""}`} key={item} onClick={()=> setTab(item)}>
                    {item}
                </a>)}
            </div>
            <motion.div layout className="flex flex-wrap items-center justify-center gap-2 px-10">
                {plural.filter(e=>e.includes(tab)).map((item: string, index: number) =>
                    <motion.div layout className="card bg-neutral text-neutral-content w-30 shadow-xl rounded-2xl" key={index} onClick={() => openModal(item)}>
                        <div className="tooltip" data-tip={item}>
                            <div className="card-body items-center text-center p-2">
                                <Icon $={item} size={50}/>
                            </div>
                        </div>
                    </motion.div>
                )}
                <dialog ref={modal} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Icon</h3>
                        <div className="flex items-center justify-between gap-2 mt-2">
                            <div className="flex items-center justify-center gap-2">
                                <Icon $={data} size={60}/>
                                <h1 className="text-3xl">{data}</h1>
                            </div>
                            <button className="btn btn-neutral" onClick={handleDownload}>Download</button>
                        </div>
                    </div>
                </dialog>
            </motion.div>
        </>
    )
}