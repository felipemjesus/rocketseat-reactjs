import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="dt money" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
  );
}
