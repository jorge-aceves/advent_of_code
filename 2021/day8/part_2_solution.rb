def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

def decode_output(output, keys)
  output.map do |value|
    keys[sort(value)]
  end.join('')
end

def sort(str)
  str.chars.sort.join
end

file_name = "input.txt"
arr = read_file(file_name).split("\n")
sum = 0
inputs = []
outputs = []
arr.each do |line|
  split = line.split("|")
  input = split.first.strip().split(" ")
  inputs.push(input.sort{|a,b| a.size <=> b.size })
  output = split.last.strip().split(" ")
  outputs.push(output)
end

inputs.each_with_index do |input,x|
  keys = {}
  input = input.map {|v| sort(v)}
  keys[input[0]] = '1' #shortest is 1, second shortest is 7, etc, longest is 8
  keys[input[1]] = '7'
  keys[input[2]] = '4'
  keys[input[9]] = '8'
  # we substract 4 - 1 and get segments b and d
  b_and_d_seg = input[2].chars.select do |char|
    !input[0].include?(char)
  end
  # figuring out values 2, 3 and 5
  for i in 3..5 do
    res = input[i].chars.select do |char|
      input[0].include?(char)
    end
    if res.size == 2 # this means it's number 3 in the segment
      keys[input[i]] = '3'
    else
      # if it's not 3, we figure out if it's 2 or 5 based on checking seg_b_and_d
      if input[i].include?(b_and_d_seg[0]) && input[i].include?(b_and_d_seg[1])
        keys[input[i]] = '5'
      else
        keys[input[i]] = '2'
      end
    end
  end
  # figuring out values 0, 6, 9
  for i in 6..8 do
    res = b_and_d_seg.select do |char| # if it doesn't have both b and d, it's 0
      input[i].include?(char)
    end
    if res.size == 1
      keys[input[i]] = '0'
    else
      new_res = input[i].chars.select do |char|
        input[0].include?(char) # if it doesn't have c and f, it's the 6
      end
      if new_res.size == 2
        keys[input[i]] = '9'
      else
        keys[input[i]] = '6'
      end
    end
  end
  sum += decode_output(outputs[x], keys).to_i
end
p sum