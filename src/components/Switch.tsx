import { ComponentProps } from "react";
import styled from "styled-components";

export interface SwitchProps
  extends Omit<ComponentProps<"input">, "onChange" | "size"> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const Switch = ({
  checked,
  onCheckedChange,
  disabled,
  ...props
}: SwitchProps) => {
  return (
    <Label
      className="switch"
      size={1}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={({ target }) => {
          if (disabled) return;

          onCheckedChange(target.checked);
        }}
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        {...props}
      />
      <span
        className="slider round"
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      />
    </Label>
  );
};

const Label = styled.label<{ size: number }>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size * 44}px;
  height: ${({ size }) => size * 24}px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 2.25px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 24px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
