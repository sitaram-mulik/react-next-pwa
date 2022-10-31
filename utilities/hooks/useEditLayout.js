import { useRouter } from "next/router";

function useEditLayout() {
    const { query } = useRouter();
    const { edit } = { ...query };
    return edit || false;
};

export default useEditLayout;