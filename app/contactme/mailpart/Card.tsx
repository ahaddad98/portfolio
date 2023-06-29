import Image from "next/image";
import React from "react";

const CardSnippet = () => {
    return <div className="mt-10">
        <div className="mt-4 flex w-full items-center justify-between">
            <div className="flex items-center justify-start gap-4">
                <Image src={'/username.png'} alt="" width={50} height={50} />
                <div>
                    <div>
                        @username
                    </div>
                    <div>
                        Created 5 months ago
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    details
                </div>
                <div>
                    3 starts
                </div>
            </div>
        </div>
        <div className="mt-4 rounded-lg p-4 border-[2px] border-cadrborder bg-cardbg">
            <p>
                {'function initializeModelChunk<T>(chunk: ResolvedModelChunk): T { const value: T = parseModel(chunk._response, chunk._value); const initializedChunk: InitializedChunk<T> = (chunk: any); initializedChunk._status = INITIALIZED; initializedChunk._value = value; return value; }'}
            </p>
        </div>
        <div className="w-full divider divider-vertical m-0 mt-4 mb-4 p-0 h-1"></div>
        <div>
            My work here was 5 months ago. It was for the project called “...”. Some other text can be placed here.
        </div>
    </div>
}

export default CardSnippet