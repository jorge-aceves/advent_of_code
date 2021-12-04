def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

file_name = "input.txt"
arr = read_file(file_name).split("\n")
count = []
arr.each do |number|
  number.chars.each_with_index do |c, i|
    count[i] ||= 0
    count[i] += 1 if c == '1'
  end
end
gamma = ''
epsilon = ''

count.each do |c|
  if c > (arr.size/2)
    gamma += '1'
    epsilon += '0'
  else
    gamma += '0'
    epsilon += '1'
  end
end

puts gamma.to_i(2) * epsilon.to_i(2)